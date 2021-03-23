import React from "react";
import { default as MButton, ButtonProps } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Button = ({ children, ...props }: ButtonProps) => {

    const styles = useStyles();

    return (
        <MButton
            type="submit"
            variant="contained"
            color="primary"
            className={styles.root}
            {...props}
        >
            {children}
        </MButton>
    );
};

export default Button