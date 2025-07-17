// src/components/ui/IframePDFViewer.tsx
"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

interface IframePDFViewerProps {
  fileUrl: string;
  title: string;
}

const PDFViewer = ({ fileUrl, title }: IframePDFViewerProps) => {
  const openInNewWindow = () => {
    window.open(
      fileUrl,
      "_blank",
      "width=1200,height=800,scrollbars=yes,resizable=yes"
    );
  };

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* 컨트롤 바 */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={openInNewWindow}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm font-medium">크게 보기</span>
            </motion.button>

            <motion.a
              href={fileUrl}
              download
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span className="text-sm font-medium">다운로드</span>
            </motion.a>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="h-96">
          <iframe
            src={fileUrl}
            width="100%"
            height="100%"
            title={title}
            className="border-0"
          />
        </div>
      </div>
    </div>
  );
};
export default PDFViewer;
