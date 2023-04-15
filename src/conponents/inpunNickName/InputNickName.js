import { Formik, Form, Field } from "formik";
import { object, string, number, date, InferType } from "yup";

let userSchema = object({
  nickName: string().required(),
  //   password: string().min(6).max(16).required(),
  //   email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

const initialValues = {
  nickName: "",
};

const InputNickName = ({ setNickName }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setNickName(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          NickName
          <Field type="text" name="nickName" />
        </label>

        <button type="submit">Info</button>
      </Form>
    </Formik>
  );
};

export default InputNickName;
