import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Setup Cloudinary Configuration explicitly from global environment context
const configureCloudinary = () => {
  const url = process.env.CLOUDINARY_URL;
  if (url) {
    // Parser to extract configuration settings directly from standard CLOUDINARY_URL string
    return;
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
};

configureCloudinary();

export class FileStorageService {
  /**
   * Uploads raw memory buffer to Cloudinary and returns a direct permanent public download link.
   * Utilizes raw non-image asset delivery channels to bypass dynamic compression algorithms.
   */
  static async uploadBuffer(
    buffer: Buffer,
    fileName: string,
    folder = "leads-campaigns",
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw", // Vital for CSV/XLS text assets
          folder: folder,
          public_id: `${Date.now()}-${fileName.replace(/\.[^/.]+$/, "")}`,
        },
        (error, result) => {
          if (error) {
            console.error("[Cloudinary] Upload failed:", error);
            return reject(
              new Error(`Cloudinary upload operation failed: ${error.message}`),
            );
          }
          if (!result) {
            return reject(
              new Error("Cloudinary returned empty response object."),
            );
          }
          resolve(result.secure_url);
        },
      );

      streamifier.createReadStream(buffer).pipe(uploadStream);
    });
  }
}
