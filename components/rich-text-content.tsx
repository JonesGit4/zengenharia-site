import React from "react";

interface RichTextContentProps {
  content: unknown;
}

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function RichTextContent({ content }: RichTextContentProps) {
  if (!content) return null;

  // Debug: Log the content structure
  console.log("RichText content:", JSON.stringify(content, null, 2));

  const renderNode = (node: unknown, index: number = 0): React.ReactNode => {
    if (!node) return null;

    // Handle text nodes
    if (typeof node === "string") {
      return node;
    }

    if (typeof node === "object" && node !== null && "type" in node) {
      const nodeObj = node as Record<string, unknown>;

      if (nodeObj.type === "text") {
        let text: React.ReactNode = (nodeObj.text as string) || "";

        if (nodeObj.bold) text = <strong key={index}>{text}</strong>;
        if (nodeObj.italic) text = <em key={index}>{text}</em>;
        if (nodeObj.underline) text = <u key={index}>{text}</u>;
        if (nodeObj.strikethrough) text = <del key={index}>{text}</del>;
        if (nodeObj.code)
          text = (
            <code key={index} className="bg-muted px-1 py-0.5 rounded text-sm">
              {text}
            </code>
          );

        return text;
      }

      // Handle element nodes
      switch (nodeObj.type) {
        case "paragraph":
          return (
            <p key={index} className="mb-4">
              {Array.isArray(nodeObj.children) &&
                nodeObj.children.map((child, childIndex) =>
                  renderNode(child, childIndex)
                )}
            </p>
          );

        case "heading": {
          // Validate and sanitize the heading level
          const tagValue = nodeObj.tag;
          let level = 2; // default to h2

          if (typeof tagValue === "number" && tagValue >= 1 && tagValue <= 6) {
            level = tagValue;
          } else if (typeof tagValue === "string") {
            const numLevel = parseInt(tagValue.replace(/[^0-9]/g, ""), 10);
            if (numLevel >= 1 && numLevel <= 6) {
              level = numLevel;
            }
          }

          const headingLevel = `h${level}` as HeadingLevel;
          const headingClasses: Record<HeadingLevel, string> = {
            h1: "text-3xl font-bold mb-6 mt-8",
            h2: "text-2xl font-bold mb-4 mt-6",
            h3: "text-xl font-bold mb-3 mt-5",
            h4: "text-lg font-bold mb-2 mt-4",
            h5: "text-base font-bold mb-2 mt-3",
            h6: "text-sm font-bold mb-1 mt-2",
          };

          const HeadingComponent = headingLevel;

          return (
            <HeadingComponent
              key={index}
              className={headingClasses[headingLevel]}
            >
              {Array.isArray(nodeObj.children) &&
                nodeObj.children.map((child, childIndex) =>
                  renderNode(child, childIndex)
                )}
            </HeadingComponent>
          );
        }

        case "list": {
          const ListTag = nodeObj.listType === "number" ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`mb-4 ${ListTag === "ol" ? "list-decimal" : "list-disc"} list-inside pl-4`}
            >
              {Array.isArray(nodeObj.children) &&
                nodeObj.children.map((child, childIndex) =>
                  renderNode(child, childIndex)
                )}
            </ListTag>
          );
        }

        case "listitem":
          return (
            <li key={index} className="mb-1">
              {Array.isArray(nodeObj.children) &&
                nodeObj.children.map((child, childIndex) =>
                  renderNode(child, childIndex)
                )}
            </li>
          );

        case "quote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-primary pl-4 py-2 mb-4 italic bg-muted/50 rounded-r"
            >
              {Array.isArray(nodeObj.children) &&
                nodeObj.children.map((child, childIndex) =>
                  renderNode(child, childIndex)
                )}
            </blockquote>
          );

        case "link":
          return (
            <a
              key={index}
              href={nodeObj.url as string}
              target={nodeObj.newTab ? "_blank" : undefined}
              rel={nodeObj.newTab ? "noopener noreferrer" : undefined}
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              {Array.isArray(nodeObj.children) &&
                nodeObj.children.map((child, childIndex) =>
                  renderNode(child, childIndex)
                )}
            </a>
          );

        case "linebreak":
          return <br key={index} />;

        case "horizontalrule":
          return <hr key={index} className="my-8 border-border" />;

        case "code":
          return (
            <pre
              key={index}
              className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto"
            >
              <code className="text-sm">
                {Array.isArray(nodeObj.children) &&
                  nodeObj.children.map((child, childIndex) =>
                    renderNode(child, childIndex)
                  )}
              </code>
            </pre>
          );

        default:
          // For unknown node types, try to render children
          if (Array.isArray(nodeObj.children)) {
            return (
              <div key={index}>
                {nodeObj.children.map((child, childIndex) =>
                  renderNode(child, childIndex)
                )}
              </div>
            );
          }
          return null;
      }
    }

    return null;
  };

  // Handle array of nodes (root level)
  if (Array.isArray(content)) {
    return (
      <div className="prose-content">
        {content.map((node, index) => renderNode(node, index))}
      </div>
    );
  }

  // Handle single node
  if (typeof content === "object" && content !== null && "root" in content) {
    const contentObj = content as Record<string, unknown>;
    if (
      contentObj.root &&
      typeof contentObj.root === "object" &&
      contentObj.root !== null &&
      "children" in contentObj.root
    ) {
      const rootObj = contentObj.root as Record<string, unknown>;
      if (Array.isArray(rootObj.children)) {
        return (
          <div className="prose-content">
            {rootObj.children.map((node, index) => renderNode(node, index))}
          </div>
        );
      }
    }
  }

  // Fallback for other content structures
  return <div className="prose-content">{renderNode(content)}</div>;
}
