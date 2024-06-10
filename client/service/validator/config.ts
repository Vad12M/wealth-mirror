
export const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const EMOJI_REGEXP = /(?![*#0-9]+)[\p{Emoji}\p{Emoji_Modifier}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Presentation}]/gu;
export const NAME_REGEXP = /[^\p{L}\s\-'']/gu;

export const ACCEPTED_FILE_TYPES = 'image/jpeg, application/pdf, image/png, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document';
export const ACCEPTED_IMAGE_FILE_TYPES = 'image/png, image/jpeg'
