import Base from './forms/Form';
import FormField from './forms/FormField';
import FormButton from './forms/FormButton';
import FormErrorMessage from './forms/FormErrorMessage';
import FormSwitch from './forms/FormSwitch';

const Form = props => Base(props);

Form.Field = FormField;
Form.Button = FormButton;
Form.ErrorMessage = FormErrorMessage;
Form.Switch = FormSwitch;

export default Form;