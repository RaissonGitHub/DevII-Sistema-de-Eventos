import Form from 'react-bootstrap/Form';

export default function Select({grupos: itens}) {
  return (
    <>
      <Form.Select>
        {itens.map((item)=>(<option key={item?.id} value={item?.id}>{item.name}</option>))}
        {/* <option>Default select</option> */}
      </Form.Select>
    </>
  );
}

