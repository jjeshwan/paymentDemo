export class DemoPage{

    getAcceptCookiesButton(){
        return `[role='alertdialog'] button`;
    }

    getBankOptionButton(){
        return `[data-testid='bank-payment-btn']`;
    }

    getAmountInputField(){
        return `[data-testid='amount-input']`;
    }

    getEmailInputField(){
        return `[data-testid='email-input']`;
    }

    getTermsAndConditionCheckboxField(){
        return `[data-testid='checkmark-icon']`;
    }

    getSwedbankLabel(){
        return `label:has([aria-label="Swedbank AB bank"])`;
    }

    getPayButton(){
        return `[data-testid='bank-payment-form'] ._submitBtn_ae700_57`;
    }

    getTermsAndConditionErrorMessage(){
        return `._container_72pu9_1 #\\:rj\\:`;
    }
}
