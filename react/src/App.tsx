import { Count } from "./components/count";
import { Form } from "./components/form";
import { Headers } from "./components/headers";
import { RegistrationForm } from "./components/registration-form";
import { ThemeProvider } from "./providers/theme-provider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Headers />
      </ThemeProvider>
      <Count />
      <Form />
      <RegistrationForm />
    </>
  );
};

export default App;
