import DateField from "@components/form/DateField";
import InputField from "@components/form/InputField";

function FormTask({ formProps }) {
  const {
    handleFormSubmit,
    formData,
    initialFields,
    columnsText,
    columnsDate,
    validationErrors,
    handleInputChange,
    buttonText,
  } = formProps;

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="hidden"
        value={formData[initialFields.user.name].value}
        name={initialFields.user.name}
      />

      {columnsText.map((columnText, index) => (
        <InputField
          key={index}
          name={columnText.name}
          formData={formData}
          validationErrors={validationErrors}
          handlerChange={handleInputChange}
        />
      ))}

      {columnsDate &&
        columnsDate.map((columnDate, index) => (
          <DateField
            key={index}
            name={columnDate.name}
            formData={formData}
            validationErrors={validationErrors}
            handlerChange={handleInputChange}
          />
        ))}

      <div className="flex justify-start mt-6">
        <button
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default FormTask;
