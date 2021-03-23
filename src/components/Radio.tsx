import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import { default as MRadio } from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import { Controller } from "react-hook-form"
import { makeStyles } from '@material-ui/core/styles';
import { IFieldComponentProps } from "../containers/register/types"
import FormHelperText from "@material-ui/core/FormHelperText"

const useStyles = makeStyles((theme) => ({
    option: {
        flexDirection: "row"
    },
    root: {
        margin: theme.spacing(2, 0)
    }
}));


const Radio = (props: IFieldComponentProps) => {

    const classes = useStyles()
    const { control, options, label, name, required, error, helperText } = props;

    return <FormControl component="fieldset" fullWidth classes={{ root: classes.root }} error={error}  >
        <FormLabel component="legend">
            {`${label}${required && "*"}`}
        </FormLabel>
        {error && <FormHelperText >{helperText}</FormHelperText>}

        <Controller
            control={control}
            defaultValue=""
            name={name}
            as={
                <RadioGroup  >
                    {
                        options?.map((option: any) => <FormControlLabel
                            className={classes.option}
                            key={option.value}
                            value={option.value}
                            control={<MRadio />}
                            label={option.label}
                        />)
                    }
                </RadioGroup>
            }
        />
    </FormControl>
}

export default (Radio)
