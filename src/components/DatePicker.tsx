import { KeyboardDatePicker } from "@material-ui/pickers/DatePicker"
import { MuiPickersUtilsProvider } from "@material-ui/pickers/MuiPickersUtilsProvider"
import { Controller } from "react-hook-form"
import DateFnsUtils from "@date-io/date-fns";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IFieldComponentProps } from "../containers/register/types";

const useStyles = makeStyles( (theme) => ({
    picker: {
        marginTop: theme.spacing(1)
    }
}));


const DatePicker = (props: IFieldComponentProps) => {

    const { control, name, label, required } = props
    const classes = useStyles()

    return <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <Controller
            name={name}
            control={control}
            render={({ ref, ...rest }) => (
                <KeyboardDatePicker
                    className={classes.picker}
                    fullWidth
                    margin="normal"
                    label={`${label}${required && "*"}`}
                    format="MM/dd/yyyy"
                    KeyboardButtonProps={{
                        "aria-label": "change date"
                    }}
                    {...rest}
                />
            )}
        />
    </MuiPickersUtilsProvider>
}

export default DatePicker;