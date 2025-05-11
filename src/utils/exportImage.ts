
import html2canvas from "html2canvas";

export const exportQuoteAsImage = async (elementId: string, fileName: string = "quote") => {
  try {
    const element = document.getElementById(elementId);
    
    if (!element) {
      throw new Error("Element not found");
    }

    // Make copy of element to avoid styles being affected by parent containers
    const clonedElement = element.cloneNode(true) as HTMLElement;
    clonedElement.style.position = "fixed";
    clonedElement.style.top = "-9999px";
    clonedElement.style.transform = "none";
    document.body.appendChild(clonedElement);

    const canvas = await html2canvas(clonedElement, {
      backgroundColor: null,
      scale: 2, // Higher resolution
      logging: false
    });

    document.body.removeChild(clonedElement);

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
