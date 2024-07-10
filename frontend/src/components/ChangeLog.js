import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import UpdateStatusModal from './UpdateStatusModal';

const ChangeLog = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetchLog();
  }, []);

  const fetchLog = async () => {
    try {
      const response = await axios.get('http://localhost:3001/change-log');
      setLogEntries(response.data);
    } catch (error) {
      console.error('Error al obtener el registro de cambios:', error);
    }
  };

  const handleUpdate = () => {
    fetchLog();
  };

  return (
    <div>
      <h2>Registro de Cambios</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Fecha y Hora</th>
            <th>Email</th>
            <th>Nuevo Estado</th>
          </tr>
        </thead>
        <tbody>
          {logEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry[0]}</td> 
              <td>{entry[1]}</td>
              <td>{entry[2]}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <UpdateStatusModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onUpdate={handleUpdate}
      />

      <Button variant="primary" onClick={() => setModalShow(true)}>Actualizar Estado</Button>
    </div>
  );
};

export default ChangeLog;
