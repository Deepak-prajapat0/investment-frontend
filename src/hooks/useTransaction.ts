import { useState } from 'react';
import { toast } from 'sonner';
import { addTransaction, updateTransaction } from '@/services/user.service';
import { UserDetailTypes } from '@/types/type';

const useTransaction = (user: UserDetailTypes | null, setUser: (user: UserDetailTypes | null | any) => void) => {
    const [transaction, setTransaction] = useState(null);

    const processTransaction = async (data: any) => {
        if (!user) return;

        try {
            const formData = { ...data, userId: user._id };
            let response: any;

            if (data.id) {
                delete formData.id
                response = await updateTransaction(formData, data.id);
            } else {
                response = await addTransaction(formData);
            }

            if (response) {
                toast.success(response.message);

                const updatedTransactions = user?.transactions ?? []; // Ensure transactions is an array

                const transactionExists = updatedTransactions.some(
                    (item: any) => item._id === response.data._id
                );

                const updatedTransactionsList = transactionExists
                    ? updatedTransactions.map((item: any) =>
                        item._id === response.data._id ? response.data : item
                    )
                    : [...updatedTransactions, response.data];


                const totalCredit = updatedTransactionsList.reduce(
                    (sum, item: any) => sum + ( item?.type === 'credit'? Number(item.amount) : 0), 0
                );

                const totalDebit = updatedTransactionsList.reduce(
                    (sum, item: any) => sum + ( item?.type === 'debit'? Number(item.amount) : 0), 0
                );

                // Calculate remainingAmount (assuming there is a total limit or previous balance)
                // const remainingAmount = prev.totalAmount - totalCredit;

                setUser((prev: any) => prev
                    ? { ...prev, totalCredit, remainingAmount: totalCredit-totalDebit, transactions: updatedTransactionsList }
                    : null
                );
            }
        } catch (error) {
            toast.error("Transaction failed. Please try again.");
            console.error("Transaction error:", error);
        }
    };

    return { transaction, setTransaction, processTransaction };
};

export default useTransaction;
