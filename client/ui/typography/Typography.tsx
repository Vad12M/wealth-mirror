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
    | 'link2'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'heading6SM'
    | 'body1'
    | 'body2'
    | 'body2B'
    | 'body2A'
    | 'title'
    | 'footer'
    | 'txt1'
    | 'navBar'
    | 'heading4NotBold'
    | 'oops'
    | 'oops_desc'
    | 'button_monserrat'
    | 'registerTitle'
    | 'registerDesc'
    | "subHeading4"
    | 'smallModerate'
    | 'canvasTitle'
    | 'labelsMedium'
    | 'labelsSmall'
    | 'labelsVerySmall';
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

  const highlightPrimaryElements = (
    text: string,
    primaryElements?: string[],
    boldElements?: string[],
    highlightClass?: string
  ) => {
    const elements = (primaryElements || []).concat(boldElements || []);
    if (elements.length === 0) return text;

    const escapedElements = elements.map(element => element.replace(/\?/g, '\\?'));
    const regex = new RegExp(`(${escapedElements.join('|')})`, 'gi');

    return text.split(regex).map((part, index) =>
      elements.includes(part) ? (
        <span
          key={index}
          className={highlightClass ? highlightClass : !!primaryElements?.length ? styles.primaryElement : styles.boldElement}
        >
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
    case 'link2':
      return <p className={`${styles.link2} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading1':
      return <p className={`${styles.heading1} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading2':
      return <p className={`${styles.heading2} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading3':
      return <p className={`${styles.heading3} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading4':
      return <p className={`${styles.heading4} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading5':
      return <p className={`${styles.heading5} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading6':
      return <p className={`${styles.heading6} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading6SM':
      return <p className={`${styles.heading6SM} ${className} ${color}`}>{highlightedText}</p>;
    case 'body1':
      return <p className={`${styles.body1} ${className} ${color}`}>{highlightedText}</p>;
    case 'body2':
      return <p className={`${styles.body2} ${className} ${color}`}>{highlightedText}</p>;
    case 'body2B':
      return <p className={`${styles.body2B} ${className} ${color}`}>{highlightedText}</p>;
    case 'body2A':
      return <p className={`${styles.body2A} ${className} ${color}`}>{highlightedText}</p>;
    case 'title':
      return <p className={`${styles.title} ${className} ${color}`}>{highlightedText}</p>;
    case 'footer':
      return <p className={`${styles.footer} ${className} ${color}`}>{highlightedText}</p>;
    case 'txt1':
      return <p className={`${styles.txt1} ${className} ${color}`}>{highlightedText}</p>;
    case 'navBar':
      return <p className={`${styles.navBar} ${className} ${color}`}>{highlightedText}</p>;
    case 'heading4NotBold':
      return <p className={`${styles.heading4NotBold} ${className} ${color}`}>{highlightedText}</p>;
    case 'oops':
      return <p className={`${styles.oops} ${className} ${color}`}>{highlightedText}</p>;
    case 'oops_desc':
      return <p className={`${styles.oops_desc} ${className} ${color}`}>{highlightedText}</p>;
    case 'button_monserrat':
      return <p className={`${styles.button_monserrat} ${className} ${color}`}>{highlightedText}</p>;
    case 'registerTitle':
      return <p className={`${styles.registerTitle} ${className} ${color}`}>{highlightedText}</p>;
    case 'registerDesc':
      return <p className={`${styles.registerDesc} ${className} ${color}`}>{highlightedText}</p>;
    case 'subHeading4':
      return <p className={`${styles.subHeading4} ${className} ${color}`}>{highlightedText}</p>;
    case 'smallModerate':
      return <p className={`${styles.smallModerate} ${className} ${color}`}>{highlightedText}</p>;
    case 'canvasTitle':
      return <p className={`${styles.canvasTitle} ${className} ${color}`}>{highlightedText}</p>;
    case 'labelsMedium':
      return <p className={`${styles.labelsMedium} ${className} ${color}`}>{highlightedText}</p>;
    case 'labelsSmall':
      return <p className={`${styles.labelsSmall} ${className} ${color}`}>{highlightedText}</p>;
    case 'labelsVerySmall':
      return <p className={`${styles.labelsVerySmall} ${className} ${color}`}>{highlightedText}</p>;
    default:
      return <p className={`${styles.body} ${className} ${color}`}>{highlightedText}</p>;
  }
}
