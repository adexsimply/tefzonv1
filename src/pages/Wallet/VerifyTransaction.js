import React from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import { Row, Col} from "antd";
import { useHistory } from 'react-router';
import { verifyFundWallet } from '../../helpers/api';
import { openNotification } from '../../helpers/notification';
// import Form from 'antd/lib/form/Form';

function VerifyTransaction() {
  const history = useHistory();

  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let reference = urlParams.get('reference');
    
    if (reference) {
      let data = {reference, save_card: 'no'}
      verifyFundWallet(data)
        .then((response) => {
          openNotification({
            type: "success",
            title: "Successfull",
            message: "Wallet has been funded succesfully",
          });
          history.replace('/wallet');
        })
        .catch(error => {
          console.log(error);
          openNotification({
            type: "error",
            title: "Action not succesfull",
            message: "Error encountered while try to fund your Wallet",
          });
          history.replace('/wallet');
        })
    }
    // eslint-disable-next-line
  }, [])

  return (
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <div className={'w-full flex flex-col items-center justify-center mt-10'}>
            <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
            <p className={'text-lg font-bold mt-3'}>Please waith while we verify your transaction</p>
          </div>
        </Col>
      </Row>
  );
}

export default VerifyTransaction;
