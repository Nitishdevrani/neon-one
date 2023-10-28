import { Button } from "@mui/material";
import { styled } from "@mui/system";
const Varient = ['text', 'contained', 'outlined'];

const CustomMuiButton = styled(Button)(({theme,bgcolor})=>({
    borderRadius : "30px",
    color : "white",
    fontWeight : "700",
    width : "325px",
    height : "60px",
    fontSize : "20px",
    backgroundColor : bgcolor ? bgcolor : theme?.palette?.primary?.main
}))

const ButtonAtom = ({
    val = "Button",
    ui = Varient[1],
    type = "",
    onClickFn = () => { },
    icon = false,
    bgColor = ''
}) =>
    <CustomMuiButton
        variant={ui}
        onClick={onClickFn}
        type={type}
        startIcon={icon}
        bgcolor={bgColor}
        // endIcon={icon}

    >
        {val}
    </CustomMuiButton>

export default ButtonAtom;