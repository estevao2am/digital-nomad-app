import { IFeedbackService } from "@/src/infra/feedbackService/IFeedbackService";
import { Alert } from "react-native";

export const AlertFeedback: IFeedbackService = {
  send: (feedback) => {
    Alert.alert(feedback.message, feedback.description);
  },
};
