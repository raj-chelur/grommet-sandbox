import React from "react";
import {
  Box,
  Grid,
  Button,
  CheckBox,
  Form,
  FormField,
  RadioButtonGroup,
  Select,
  Heading
} from "grommet";
import SandboxComponent from "../SandboxComponent";

export default () => (
  <SandboxComponent pad="none">
    <Grid
      areas={[["header"], ["content"], ["footer"]]}
      columns={["flex"]}
      rows={["xsmall", "auto", "xxsmall"]}
      gap="small"
    >
      <Box gridArea="header" background="neutral-3" pad="large">
        <Heading>My Form</Heading>
      </Box>
      <Box gridArea="content" background="light-2" pad="large">
        <Form onSubmit={({ value }) => console.log("Submit: ", value)}>
          <FormField name="name" label="Name" required={true} />
          <FormField
            label="Continent"
            name="select"
            component={Select}
            options={["North America", "South America", "Asia"]}
          />
          <FormField name="address" label="Address" />
          <FormField
            name="acknowledge"
            component={CheckBox}
            pad={true}
            label="acknowledge"
          />
          <FormField
            name="day"
            component={RadioButtonGroup}
            pad={true}
            options={["Tuesday", "Friday"]}
          />
        </Form>
      </Box>
      <Box gridArea="footer" background="white">
        <Button type="submit" label="Submit" primary={true} stretch={false} />
      </Box>
    </Grid>
  </SandboxComponent>
);
