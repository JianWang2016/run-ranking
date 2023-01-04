/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Race } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function RaceUpdateForm(props) {
  const {
    id,
    race,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    finishHour: undefined,
    finishMin: undefined,
    finishSec: undefined,
    raceName: undefined,
    raceDate: undefined,
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    gender: undefined,
    birthdate: undefined,
    email: undefined,
  };
  const [finishHour, setFinishHour] = React.useState(initialValues.finishHour);
  const [finishMin, setFinishMin] = React.useState(initialValues.finishMin);
  const [finishSec, setFinishSec] = React.useState(initialValues.finishSec);
  const [raceName, setRaceName] = React.useState(initialValues.raceName);
  const [raceDate, setRaceDate] = React.useState(initialValues.raceDate);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [middleName, setMiddleName] = React.useState(initialValues.middleName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [birthdate, setBirthdate] = React.useState(initialValues.birthdate);
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...raceRecord };
    setFinishHour(cleanValues.finishHour);
    setFinishMin(cleanValues.finishMin);
    setFinishSec(cleanValues.finishSec);
    setRaceName(cleanValues.raceName);
    setRaceDate(cleanValues.raceDate);
    setFirstName(cleanValues.firstName);
    setMiddleName(cleanValues.middleName);
    setLastName(cleanValues.lastName);
    setGender(cleanValues.gender);
    setBirthdate(cleanValues.birthdate);
    setEmail(cleanValues.email);
    setErrors({});
  };
  const [raceRecord, setRaceRecord] = React.useState(race);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Race, id) : race;
      setRaceRecord(record);
    };
    queryData();
  }, [id, race]);
  React.useEffect(resetStateValues, [raceRecord]);
  const validations = {
    finishHour: [{ type: "Required" }],
    finishMin: [],
    finishSec: [],
    raceName: [{ type: "Required" }],
    raceDate: [{ type: "Required" }],
    firstName: [{ type: "Required" }],
    middleName: [],
    lastName: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    birthdate: [],
    email: [{ type: "Email" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          finishHour,
          finishMin,
          finishSec,
          raceName,
          raceDate,
          firstName,
          middleName,
          lastName,
          gender,
          birthdate,
          email,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Race.copyOf(raceRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "RaceUpdateForm")}
    >
      <TextField
        label="Finish hour"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={finishHour}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              finishHour: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              finishHour: value,
              finishMin,
              finishSec,
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.finishHour ?? value;
          }
          if (errors.finishHour?.hasError) {
            runValidationTasks("finishHour", value);
          }
          setFinishHour(value);
        }}
        onBlur={() => runValidationTasks("finishHour", finishHour)}
        errorMessage={errors.finishHour?.errorMessage}
        hasError={errors.finishHour?.hasError}
        {...getOverrideProps(overrides, "finishHour")}
      ></TextField>
      <TextField
        label="Finish min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={finishMin}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              finishMin: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin: value,
              finishSec,
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.finishMin ?? value;
          }
          if (errors.finishMin?.hasError) {
            runValidationTasks("finishMin", value);
          }
          setFinishMin(value);
        }}
        onBlur={() => runValidationTasks("finishMin", finishMin)}
        errorMessage={errors.finishMin?.errorMessage}
        hasError={errors.finishMin?.hasError}
        {...getOverrideProps(overrides, "finishMin")}
      ></TextField>
      <TextField
        label="Finish sec"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={finishSec}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              finishSec: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec: value,
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.finishSec ?? value;
          }
          if (errors.finishSec?.hasError) {
            runValidationTasks("finishSec", value);
          }
          setFinishSec(value);
        }}
        onBlur={() => runValidationTasks("finishSec", finishSec)}
        errorMessage={errors.finishSec?.errorMessage}
        hasError={errors.finishSec?.hasError}
        {...getOverrideProps(overrides, "finishSec")}
      ></TextField>
      <TextField
        label="Race name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={raceName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName: value,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.raceName ?? value;
          }
          if (errors.raceName?.hasError) {
            runValidationTasks("raceName", value);
          }
          setRaceName(value);
        }}
        onBlur={() => runValidationTasks("raceName", raceName)}
        errorMessage={errors.raceName?.errorMessage}
        hasError={errors.raceName?.hasError}
        {...getOverrideProps(overrides, "raceName")}
      ></TextField>
      <TextField
        label="Race date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        defaultValue={raceDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName,
              raceDate: value,
              firstName,
              middleName,
              lastName,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.raceDate ?? value;
          }
          if (errors.raceDate?.hasError) {
            runValidationTasks("raceDate", value);
          }
          setRaceDate(value);
        }}
        onBlur={() => runValidationTasks("raceDate", raceDate)}
        errorMessage={errors.raceDate?.errorMessage}
        hasError={errors.raceDate?.hasError}
        {...getOverrideProps(overrides, "raceDate")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName,
              raceDate,
              firstName: value,
              middleName,
              lastName,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Middle name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={middleName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName,
              raceDate,
              firstName,
              middleName: value,
              lastName,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.middleName ?? value;
          }
          if (errors.middleName?.hasError) {
            runValidationTasks("middleName", value);
          }
          setMiddleName(value);
        }}
        onBlur={() => runValidationTasks("middleName", middleName)}
        errorMessage={errors.middleName?.errorMessage}
        hasError={errors.middleName?.hasError}
        {...getOverrideProps(overrides, "middleName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        defaultValue={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName: value,
              gender,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender: value,
              birthdate,
              email,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "genderoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "genderoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Birthdate"
        isRequired={false}
        isReadOnly={false}
        type="date"
        defaultValue={birthdate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              birthdate: value,
              email,
            };
            const result = onChange(modelFields);
            value = result?.birthdate ?? value;
          }
          if (errors.birthdate?.hasError) {
            runValidationTasks("birthdate", value);
          }
          setBirthdate(value);
        }}
        onBlur={() => runValidationTasks("birthdate", birthdate)}
        errorMessage={errors.birthdate?.errorMessage}
        hasError={errors.birthdate?.hasError}
        {...getOverrideProps(overrides, "birthdate")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        defaultValue={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceName,
              raceDate,
              firstName,
              middleName,
              lastName,
              gender,
              birthdate,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
