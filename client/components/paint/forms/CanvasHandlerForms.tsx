import React from "react";
import CarForm from "@/components/paint/forms/CarForm";
import CardForm from "@/components/paint/forms/CardForm";
import RealEstateForm from "@/components/paint/forms/RealEstateForm";
import StockForm from "@/components/paint/forms/StockForm";
import MutualFuundForm from "@/components/paint/forms/MutualFuundForm";
import LiquidCashForm from "@/components/paint/forms/LiquidCashForm";
import CryptoForm from "@/components/paint/forms/CryptoForm";
import FixedDepositForm from "@/components/paint/forms/FixedDepositForm";
import SavingForm from "@/components/paint/forms/SavingForm";
import IncomeForm from "@/components/paint/forms/IncomeForm";
import ExpensesForm from "@/components/paint/forms/ExpensesForm";
import GoldForm from "@/components/paint/forms/GoldForm";

export default function CanvasHandlerForms({
  type,
  position,
  defaultForm,
  onClose,
}: {
  type: string;
  position: {
    x: number;
    y: number;
  };
  defaultForm?: any;
  onClose?: () => void;
}) {

  switch (type) {
    case 'stock':
      return <StockForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'realEstate':
      return <RealEstateForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'mutualFunds':
      return <MutualFuundForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'car':
      return <CarForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'fixedDeposit':
      return <FixedDepositForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'crypto':
      return <CryptoForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'liquidCash':
      return <LiquidCashForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'saving':
      return <SavingForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'card':
      return <CardForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'income':
      return <IncomeForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'expense':
      return <ExpensesForm position={position} defaultForm={defaultForm} onClose={onClose}/>
    case 'gold':
      return <GoldForm position={position} defaultForm={defaultForm} onClose={onClose}/>
  }
}
