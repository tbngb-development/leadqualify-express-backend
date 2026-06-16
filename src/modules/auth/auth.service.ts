import bcrypt from "bcryptjs";
import jwt, { SignOptions } from "jsonwebtoken";
import prisma from "../../config/database";
import { Role } from "@prisma/client";

class AuthService {
  async register(data: {
    tenantName: string;
    email: string;
    password: string;
    name: string;
  }) {
    const existing = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existing) {
      throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const result = await prisma.$transaction(async (tx) => {
      const tenant = await tx.tenant.create({
        data: {
          name: data.tenantName,
          email: data.email
        }
      });

      const user = await tx.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          name: data.name,
          role: Role.ADMIN,
          tenantId: tenant.id
        }
      });

      return { tenant, user };
    });

    const token = this.generateToken(result.user.id);

    return {
      token,
      user: {
        id: result.user.id,
        email: result.user.email,
        name: result.user.name,
        role: result.user.role
      },
      tenant: {
        id: result.tenant.id,
        name: result.tenant.name,
        apiKey: result.tenant.apiKey
      }
    };
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { tenant: true }
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error("Invalid email or password");
    }

    const token = this.generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      tenant: {
        id: user.tenant.id,
        name: user.tenant.name,
        apiKey: user.tenant.apiKey
      }
    };
  }

  async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { tenant: true }
    });

    if (!user) {
      throw new Error("User not found");
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      tenant: {
        id: user.tenant.id,
        name: user.tenant.name,
        apiKey: user.tenant.apiKey
      }
    };
  }

  private generateToken(userId: string): string {
    const options: SignOptions = { expiresIn: "7d" };
    return jwt.sign(
      { id: userId },
      process.env.JWT_SECRET || "secret",
      options
    );
  }
}

export default new AuthService();