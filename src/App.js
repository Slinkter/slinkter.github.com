import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ComplexNavbar } from "./Components/Nav";
import { CardDefault } from "./Components/Card";

export default function App() {
  return (
    <div>
      <ComplexNavbar></ComplexNavbar>

      <div className=" grid grid-cols-1  lg:grid-cols-3 gap-3 justify-center items-center">
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
        <CardDefault />
      </div>
    </div>
  );
}
