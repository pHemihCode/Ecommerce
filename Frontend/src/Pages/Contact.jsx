import { Formik, Form, Field } from "formik";
import { validationSchema } from "../Components/Form/ContactFormValidation";
function Contact() {
  const initialValues = {
    email: "",
    message: "",
  };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className="thecontact flex flex-col justify-center items-center px-3 lg:px-0">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="theForm p-3 shadow-xl bg-white rounded-md flex flex-col gap-2 justify-center mt-10">
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg">
                Email
              </label>
              <Field
                type="text"
                name="email"
                className="py-2 px-2 rounded-md text-sm lg:text-base outline-none border-2 my-1"
              />
              {errors.email && touched.email ? (
                <p className="error italic text-red-500">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg">
                Message
              </label>
              <Field
                type="text"
                name="message"
                as="textarea"
                className="py-2 px-2 rounded-md text-sm lg:text-base outline-none border-2 my-1"
              />
              {errors.message && touched.message ? (
                <p className="error italic text-red-500">{errors.message}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-black text-white w-28 rounded-md py-2 my-3 text-base"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;