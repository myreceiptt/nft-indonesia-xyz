import Link from "next/link";

export default function CustomLink(props){
    const href = props.href;
    const isInternalLink = href && (href.startsWith('/'));

    if (isInternalLink) {
      return (
        <Link href={href}>
          {props.children}
        </Link>
      );
    }

    return <a target="_blank" {...props} />;
  };