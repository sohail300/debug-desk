export const uploadToStorage = async (
  file: Express.Multer.File
): Promise<string> => {
  // Placeholder for actual upload logic (e.g., AWS S3, Cloudinary)
  return `https://yourstorage.com/${file.originalname}`;
};
