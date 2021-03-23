import React from "react";
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { IFieldComponentProps } from "../containers/register/types";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1, 0)
    }
}));

const Input = (props: IFieldComponentProps) => {

    const classes = useStyles()
    const { control, ...rest } = props

    return (
        <Controller as={TextField} fullWidth control={control} classes={{ root: classes.root }} {...rest} />
    );
};

export default (Input)