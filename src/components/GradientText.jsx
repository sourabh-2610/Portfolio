import './GradientText.css';

export default function GradientText({
  children,
  className = '',
  colors = ['#e8a87c', '#f0c4a8', '#c88a6a'],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span className={`gradient-text-container ${showBorder ? 'has-border' : ''} ${className}`}>
      {showBorder && <span className="gradient-border-overlay" style={gradientStyle} />}
      <span className="gradient-text-content" style={gradientStyle}>
        {children}
      </span>
    </span>
  );
}
