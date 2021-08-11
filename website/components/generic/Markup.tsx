import classes from "./Markup.module.css";

export const Markup = ({ markup }: { markup: string }) => {
  return (
    <div
      className={classes.markup}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
};
