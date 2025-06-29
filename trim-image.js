import sharp from 'sharp';
import { promises as fs } from 'fs';

async function trimImage() {
  try {
    const inputPath = './public/images/b101.png';
    const outputPath = './public/images/b101-trimmed.png';
    
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Remove 325px from top and 350px from bottom
    const top = 325;
    const bottomCrop = 350;
    const height = metadata.height - top - bottomCrop;
    
    // Crop the image
    await sharp(inputPath)
      .extract({ left: 0, top, width: metadata.width, height })
      .toFile(outputPath);
    
    console.log(`Image trimmed successfully! New height: ${height}px`);
    console.log(`Original file: ${inputPath}`);
    console.log(`Trimmed file: ${outputPath}`);
    
  } catch (error) {
    console.error('Error trimming image:', error);
  }
}

trimImage();
