import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import type { FileStorageProvider } from "./file-storage.interface";

// ── Configuration ────────────────────────────────────────────────────────────

function configureCloudinary(): void {
  if (process.env.CLOUDINARY_URL) {
    return; // cloudinary SDK auto-parses CLOUDINARY_URL
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

configureCloudinary();

// ── Implementation ───────────────────────────────────────────────────────────

export class CloudinaryStorageProvider implements FileStorageProvider {
  async uploadBuffer(
    buffer: Buffer,
    fileName: string,
    folder: string,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw",
          folder,
          public_id: `${Date.now()}-${fileName.replace(/\.[^/.]+$/, "")}`,
        },
        (error, result) => {
          if (error) {
            console.error("[Cloudinary] Upload failed:", error);
            reject(new Error(`Cloudinary upload failed: ${error.message}`));
            return;
          }
          if (!result) {
            reject(new Error("Cloudinary returned empty response."));
            return;
          }
          resolve(result.secure_url);
        },
      );

      streamifier.createReadStream(buffer).pipe(uploadStream);
    });
  }
}
