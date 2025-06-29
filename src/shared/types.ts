export type SuccessResponse<T=void> = {
    success: true;
    message: string;
    
}&(T extends void ? {} : { data: T });
export type ErrorResponse = {
    success: false;
    isFormError?: boolean;
    error?: string;
};

