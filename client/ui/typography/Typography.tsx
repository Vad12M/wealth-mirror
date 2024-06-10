import styles from './typography.module.scss';

interface ITypography {
  type?: 'h1' | 'body' | 'bodySB' | 'sub1' | 'button';
  text: string;
  className?: string;
  color?: string;
  primaryElements?: string[];
}

export default function Typography({
  text,
  type = 'h1',
  color = 'text-white',
  className,
  primaryElements = []
}: ITypography) {

  const highlightPrimaryElements = (text: string, primaryElements: string[]) => {
    if (primaryElements.length === 0) return text;

    const regex = new RegExp(`(${primaryElements.join('|')})`, 'gi');
    return text.split(regex).map((part, index) =>
      primaryElements.includes(part) ? (
        <span key={index} className={styles.primaryElement}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const highlightedText = highlightPrimaryElements(text, primaryElements);

  switch (type) {
    case 'h1':
      return <h1 className={`${styles.h1} ${className} ${color}`}>{highlightedText}</h1>;
    case 'sub1':
      return <h2 className={`${styles.sub1} ${className} ${color}`}>{highlightedText}</h2>;
    case 'body':
      return <p className={`${styles.body} ${className} ${color}`}>{highlightedText}</p>;
    case 'bodySB':
      return <p className={`${styles.bodySB} ${className} ${color}`}>{highlightedText}</p>;
    case 'button':
      return <p className={`${styles.button} ${className} ${color}`}>{highlightedText}</p>;
    default:
      return <p className={`${styles.body} ${className} ${color}`}>{highlightedText}</p>;
  }
}
