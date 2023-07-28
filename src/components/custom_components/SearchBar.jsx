import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchBar = ({ handleSearch, search }) => {
  return (
    <Form>
      <InputGroup className="my-3">
        <Form.Control
          onChange={handleSearch}
          placeholder="Search contacts"
          value={search}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
