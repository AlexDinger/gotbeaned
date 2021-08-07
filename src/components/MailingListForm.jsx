import React from "react";

const MailingListForm = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-5 py-10">
      <h3 className="text-3xl font-semibold text-center uppercase">
        Subscibe to our mailing list
      </h3>
      <p className="text-lg text-center mt-5">
        Sign up for our newsletter for news on future products and services!
      </p>
      <form className="mt-10 w-full flex flex-row overflow-hidden rounded-sm shadow-xl max-w-sm">
        <input
          name="mailing-email"
          type="email"
          placeholder="you@email.com"
          className="h-full p-2 text-black flex-grow"
        />
        <button type="submit" className="px-4 py-2 bg-red-500 hover:bg-red-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default MailingListForm;
