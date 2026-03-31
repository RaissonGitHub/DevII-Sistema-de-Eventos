import Table from 'react-bootstrap/Table';

export default function TableItem({ itens = [], titulo = '', renderItem = (item) => item.name ?? item.title ?? JSON.stringify(item) }) {
  const rows = itens.length > 0 ? itens : [{ id: 'empty', text: 'Nenhum registro encontrado' }];

  return (
    <Table striped>
      <thead>
        <tr>
          <th align='center'>
            <strong>{titulo}</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {itens.length === 0 ? (
          <tr>
            <td>Nenhum registro encontrado</td>
          </tr>
        ) : (
          itens.map((item) => (
            <tr key={item?.id ?? Math.random()}>
              <td>{renderItem(item)}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

