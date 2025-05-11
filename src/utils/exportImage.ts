
import html2canvas from "html2canvas";

export const exportQuoteAsImage = async (element: HTMLElement, fileName: string = "quote") => {
  try {
    if (!element) {
      throw new Error("Element not found");
    }

    // Capture just the provided element
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 2, // Higher resolution
      logging: false
    });

    const image = canvas.toDataURL("image/png", 1.0);
    
    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = image;
    downloadLink.download = `${fileName}.png`;
    downloadLink.click();
    
    return true;
  } catch (error) {
    console.error("Error exporting quote as image:", error);
    return false;
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    return false;
  }
};
