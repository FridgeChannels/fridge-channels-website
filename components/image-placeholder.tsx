type ImagePlaceholderProps = {
  label: string;
  desktop: string;
  mobile: string;
  ratio?: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  desktop,
  mobile,
  ratio = "16:10",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div className={`ci-image-placeholder ${className}`} role="img" aria-label={`${label} image placeholder`}>
      <span className="ci-image-placeholder-mark" aria-hidden="true">+</span>
      <span className="ci-image-placeholder-label">{label}</span>
      <span className="ci-image-placeholder-meta">{ratio} · Desktop {desktop} · Mobile {mobile}</span>
    </div>
  );
}
