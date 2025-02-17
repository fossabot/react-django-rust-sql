// React -%- ////
import * as React from "react";

// Packages -%- ////
import { useFormik } from "formik";
import { useSelector } from "react-redux";

// Types -%- ////
import type { RootState } from "../../redux/store";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export default function SubmitForm({ handleSubmit }: any) {
  const form = useSelector((state: RootState) => state.form.value);

  const handleSubmitForm = async (form: any) => {
    return await handleSubmit(form);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      return handleSubmitForm(form);
    },
  });

  return (
    <React.Fragment>
      <section className="block h-auto w-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-nowrap justify-center mt-9"
        >
          <button
            type="submit"
            className="block w-full p-3 mx-auto font-slab uppercase text-xl min-[2000px]:text-2xl font-bold subpixel-antialiased text-darkoff border border-light rounded bg-light hover:text-light hover:bg-darkoff hover:border-light active:text-light active:bg-darkoff active:border-light"
          >
            Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}
