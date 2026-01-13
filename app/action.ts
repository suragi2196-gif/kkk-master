'use server';

import { Resend } from 'resend';
import { z } from 'zod';
import * as React from 'react';
import { EmailTemplate } from './email-template';

// --- スキーマ定義は外側でOK ---
const formSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function sendContactEmail(formData: FormData) {
  // 1. 関数が呼ばれた瞬間に環境変数を取得する
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("❌ エラー: RESEND_API_KEY が見つかりません。");
    return { success: false, message: "サーバーの設定エラーです。" };
  }

  // 2. ここで初めて Resend を初期化する
  const resend = new Resend(apiKey);

  console.log("🚀 Server Action実行中...");

  const rawData = {
    username: formData.get('username'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const validatedFields = formSchema.safeParse(rawData);
  if (!validatedFields.success) {
    return { success: false, errors: validatedFields.error.flatten().fieldErrors };
  }

  const { username, email, subject, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['suragi2196@gmail.com'], 
      replyTo: email,
      subject: `【お問い合わせ】${subject}`,
      react: React.createElement(EmailTemplate, { username, email, subject, message }),
    });

    if (error) {
      console.error("❌ Resend API エラー:", error);
      return { success: false, message: error.message };
    }

    return { success: true, message: '送信に成功しました！' };

  } catch (err) {
    console.error("❌ 予期せぬサーバーエラー:", err);
    return { success: false, message: "予期せぬエラーが発生しました。" };
  }
}