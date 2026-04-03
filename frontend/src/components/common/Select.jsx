import Form from 'react-bootstrap/Form';

export default function Select({ className, grupos: itens = [], value = '', textFundo = '', onChange = () => {} }) {
  return (
    <>
      <Form.Select className={className} value={value} onChange={onChange}>
        <option value="">{textFundo}</option>
        {itens.map((item) => (
          <option key={item?.id} value={item?.id}>
            {item.name?item.name:item.username}
          </option>
        ))}
      </Form.Select>
    </>
  );
}

