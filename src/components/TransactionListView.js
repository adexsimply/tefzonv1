import { Row } from "antd";
import React from "react";
import { formatMoney } from "../helpers/money";
import { longDate } from "../helpers/utils";

function TransactionListView ({ transaction}) {
	return (
		<div className={'h-auto px-2 py-2 flex items-center overflow-hidden'}>
			{/* <Col >
				<Row> */}
					<div  className={'w-full my-2 border-b border-gray-500'}>
						<Row justify={'space-between'} className={'w-full'}>
							<p className={'text-sm font-semibold text-gray-700 capitalize'}>{transaction.type}</p>
							<p className={'text-sm font-semibold text-gray-600'}>{formatMoney(transaction.amount)}</p>
						</Row>
						<Row justify={'space-between'} className={'w-full mt-2 mb-3'}>
							<p className={'text-sm text-gray-400'}>To:{transaction.type && 'Tefzon Wallet'}</p>
							<p className={'text-sm text-gray-400'}>{longDate(transaction.created_at)}</p>
						</Row>
					</div>
				{/* </Row>
			</Col> */}
		</div>
	);
};

export default TransactionListView;
