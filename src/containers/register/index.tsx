import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fields, formSchema } from "./registrationUtils";
import { IFormInputs } from "./types";
import Button from "../../components/Button";
import FormRenderer from "../../components/FormRenderer";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Snackbar from "../../components/Snackbar";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 0, 1, 0),
        float: 'right'
    },
    container: {
        maxWidth: 500,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 8,
        padding: theme.spacing(3)
    }
}));

const Register = () => {

    const classes = useStyles()
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const { handleSubmit, errors, control } = useForm<IFormInputs>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            gender: "",
            dob: new Date("1990-08-01T00:00:00"),
        },
        mode: "onSubmit",
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data: any, e: any) => {
        setOpenSnackbar(true)
        console.log(data, e)
    };


    return <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center" >
        <Box className={classes.container} >
            <Typography variant="h6" >Register</Typography>

            <form  >

                <>
                    {fields.map((field) => <FormRenderer
                        key={field.name}
                        error={!!errors[field.name]}
                        control={control}
                        helperText={errors?.[field.name]?.message}
                        {...field}
                    />)}
                </>

                <Button className={classes.submit} type="submit" onClick={handleSubmit(onSubmit)} >Submit</Button>

            </form>
        </Box>
        <Snackbar open={openSnackbar} message={"Submitted!"} onClose={() => setOpenSnackbar(false)} />
    </Box>
}

export default Register