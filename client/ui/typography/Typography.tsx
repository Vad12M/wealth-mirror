import styles from './typography.module.scss';

interface ITypography {
  type?: 'h1'
    | 'body'
    | 'bodyB1'
    | 'bodySB'
    | 'sub1'
    | 'button'
    | 'healine6'
    | 'healine5'
    | 'healine4'
    | 'healine2'
    | 'link1'
    | 'heading1'
    | 'heading3'
    | 'heading6'
    | 'body2'
    | 'body2B';
  text: string;
  className?: string;
  color?: string;
  primaryElements?: string[];
  boldElements?: string[];
}

export default function Typography({
  text,
  type = 'h1',
  color = 'text-white',
  className,
  primaryElements = [],
  boldElements = [],
}: ITypography) {

  const highlightPrimaryElements = (text: string, primaryElements?: string[], boldElements?: string[]) => {
    const elements = (primaryElements || [])?.concat(boldElements || []);
    if (elements.length === 0) return text;

    const regex = new RegExp(`(${elements.join('|')})`, 'gi');
    return text.split(regex).map((part, index) =>
      elements.includes(part) ? (
        <span key={index} className={styles.boldElement}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };


  const highlightedText = highlightPrimaryElements(text, primaryElements, boldElements);

  switch (type) {
    case 'h1':
      return <h1 className={`${styles.h1} ${className} ${color}`}>{highlightedText}</h1>;
    case 'sub1':
      return <h2 className={`${styles.sub1} ${className} ${color}`}>{highlightedText}</h2>;
    case 'body':
      return <p className={`${styles.body} ${className} ${color}`}>{highlightedText}</p>;
    case 'bodyB1':
      return <p className={`${styles.bodyB1} ${className} ${color}`}>{highlightedText}</p>;
    case 'bodySB':
      return <p className={`${styles.bodySB} ${className} ${color}`}>{highlightedText}</p>;
    case 'button':
      return <p className={`${styles.button} ${className} ${color}`}>{highlightedText}</p>;
    case 'healine6':
      return <p className={`${styles.healine6} ${className} ${color}`}>{highlightedText}</p>;
    case 'healine5':
      return <p className={`${styles.healine5} ${className} ${color}`}>{highlightedText}</p>;
    case 'healine4':
      return <p className={`${styles.healine4} ${className} ${color}`}>{highlightedText}</p>;
    case 'healine2':
      return <p className={`${styles.healine2} ${className} ${color}`}>{highlightedText}</p>;
    case 'link1':
      return <p className={`${styles.link1} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading1':
      return <p className={`${styles.heading1} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading3':
      return <p className={`${styles.heading3} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading6':
      return <p className={`${styles.heading6} ${className} ${color}`}>{highlightedText}</p>;
    case 'body2':
      return <p className={`${styles.body2} ${className} ${color}`}>{highlightedText}</p>;
    case 'body2B':
      return <p className={`${styles.body2B} ${className} ${color}`}>{highlightedText}</p>;
    default:
      return <p className={`${styles.body} ${className} ${color}`}>{highlightedText}</p>;
  }
}
