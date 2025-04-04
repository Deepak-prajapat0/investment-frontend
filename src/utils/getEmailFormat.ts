
export const getEmailFormat = (name: string, otp: number) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body
    style="margin: 0px; padding: 0px; text-size-adjust: 100%; background-color: rgb(245, 248, 250); color: rgb(0, 0, 0);"
    cz-shortcut-listen="true">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;min-width: 320px;margin: 0 auto;width:100%;"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td
                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding: 15px 0;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
                    <div style="padding: 0px;background-color: transparent">
                        <div
                            style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="300"  style="background-color: #ffffff;width: 300px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div style="max-width: 320px;min-width: 300px;display: table-cell;vertical-align: top;">
                                    <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:helvetica,arial,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding: 15px 0;font-family:helvetica,arial,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="padding-right: 0px;padding-left: 0px;"
                                                                            align="center">
                                                                            <a href="${process.env.FRONTEND_URL}">
                                                                                <img align="center" border="0"
                                                                                    src="${process.env.BASE_URL}/logo.jpeg"
                                                                                    alt="Logo" title="Logo"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 200px;"
                                                                                    >
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:helvetica,arial,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;font-family:helvetica,arial,sans-serif;padding: 0 10px;"
                                                            align="left">

                                                            <table height="0px" align="center" border="0"
                                                                cellpadding="0" cellspacing="0" width="100%"
                                                                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #efefef;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                <tbody>
                                                                    <tr style="vertical-align: top">
                                                                        <td
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                            <span>&nbsp;</span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->



                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style="padding: 0px;background-color: transparent">
                        <div
                            style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="540"  style="background-color: #daeccb;width: 540px;padding: 0px;border-top: 0px solid transparent;border-left: 30px solid #ffffff;border-right: 30px solid #ffffff;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                <div style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div
                                        style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px;-moz-border-radius: 0px;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box;height: 100%;padding: 0px;border-top: 0px solid transparent;border-left: 30px solid #ffffff;border-right: 30px solid #ffffff;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;-moz-border-radius: 0px;">
                                            <!--<![endif]-->


                                            <table style="font-family:helvetica,arial,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding: 15px 0;font-family:helvetica,arial,sans-serif;"
                                                            align="left">

                                                            <h1
                                                                style="margin: 0px;color: #000000;line-height: 110%;text-align: center;word-wrap: break-word;font-size: 24px;font-weight: 700;">
                                                                <span style="line-height: 37.4px;">Reset Your MicroSale
                                                                    Password</span>
                                                            </h1>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div style="padding: 0px;background-color: transparent">
                                                <div
                                                    style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                                    <div
                                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                                        <!--[if (mso)|(IE)]><td align="center" width="187"  style="background-color: #ffffff;width: 187px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                                        <div
                                                            style="max-width: 320px;min-width: 187.98px;display: table-cell;vertical-align: top;">
                                                            <div
                                                                style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                                <!--[if (!mso)&(!IE)]><!-->
                                                                <div
                                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                                    <!--<![endif]-->


                                                                    <div
                                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                                        <!--<![endif]-->

                                                                        <table
                                                                            style="font-family:helvetica,arial,sans-serif;"
                                                                            role="presentation" cellpadding="0"
                                                                            cellspacing="0" width="100%" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="overflow-wrap:break-word;word-break:break-word;font-family:helvetica,arial,sans-serif;padding: 5px 5px 5px 5px;"
                                                                                        align="left">





                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if (!mso)&(!IE)]><!-->
                                                                    </div>
                                                                    <!--[if (!mso)&(!IE)]><!-->
                                                                </div>
                                                                <!--<![endif]-->
                                                            </div>
                                                        </div>
                                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                                        <!--[if (mso)|(IE)]><td align="center" width="412"  style="background-color: #ffffff;width: 412px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->

                                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                                    </div>
                                                </div>
                                            </div>






                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style="padding: 0px;background-color: transparent">
                        <div
                            style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="540"  style="background-color: #daeccb;width: 540px;padding: 0px;border-top: 0px solid transparent;border-left: 30px solid #ffffff;border-right: 30px solid #ffffff;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                <div style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div
                                        style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px;-moz-border-radius: 0px;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box;height: 100%;padding: 0px;border-top: 0px solid transparent;border-left: 30px solid #ffffff;border-right: 30px solid #ffffff;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px;-moz-border-radius: 0px;">
                                            <!--<![endif]-->







                                            <table style="font-family:helvetica,arial,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="width:100%;overflow-wrap:break-word;word-break:break-word;padding: 0;font-family:helvetica,arial,sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="font-size: 14px; color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                <h3
                                                                    style="line-height: 140%;margin: 0;font-size: 14px;font-family: helvetica,arial,sans-serif;">
                                                                    <span style="line-height: 19.6px;">Dear
                                                                        ${name},</span>
                                                                </h3>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td style="width:100%;overflow-wrap:break-word;word-break:break-word;padding: 0;font-family:helvetica,arial,sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="font-size: 14px; color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                <p style="line-height: 140%;margin: 0;padding: 10px 0;">
                                                                    <span style="line-height: 19.6px;">We have received
                                                                        a request to reset your MicroSale account
                                                                        password</span>
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td style="width:100%;overflow-wrap:break-word;word-break:break-word;padding: 0;font-family:helvetica,arial,sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="font-size: 14px; color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
                                                                <span style="line-height: 140%;"><span
                                                                        style="line-height: 19.6px;"><strong>Please use
                                                                            the One-Time-Password mentioned below to
                                                                            complete the process.</strong></span></span>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div style="padding: 0px;background-color: transparent">
                                                <div
                                                    style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                                    <div
                                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                                        <!--[if (mso)|(IE)]><td align="center" width="187"  style="background-color: #ffffff;width: 187px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                                        <div
                                                            style="max-width: 320px;min-width: 187.98px;display: table-cell;vertical-align: top;">
                                                            <div
                                                                style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                                <!--[if (!mso)&(!IE)]><!-->
                                                                <div
                                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                                    <!--<![endif]-->


                                                                    <div
                                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                                        <!--<![endif]-->

                                                                        <table
                                                                            style="font-family:helvetica,arial,sans-serif;"
                                                                            role="presentation" cellpadding="0"
                                                                            cellspacing="0" width="100%" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="overflow-wrap:break-word;word-break:break-word;font-family:helvetica,arial,sans-serif;padding: 5px 5px 5px 5px;"
                                                                                        align="left">





                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if (!mso)&(!IE)]><!-->
                                                                    </div>
                                                                    <!--[if (!mso)&(!IE)]><!-->
                                                                </div>
                                                                <!--<![endif]-->
                                                            </div>
                                                        </div>
                                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                                        <!--[if (mso)|(IE)]><td align="center" width="412"  style="background-color: #ffffff;width: 412px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->

                                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="padding: 0px;background-color: transparent">
                                                <div
                                                    style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                                                    <div
                                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                                        <!--[if (mso)|(IE)]><td align="center" width="187"  style="background-color: #ffffff;width: 187px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                                        <div
                                                            style="max-width: 320px;min-width: 187.98px;display: table-cell;vertical-align: top;">
                                                            <div
                                                                style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                                <!--[if (!mso)&(!IE)]><!-->
                                                                <div
                                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                                                    <!--<![endif]-->


                                                                    <div
                                                                        style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                                        <!--<![endif]-->

                                                                        <table
                                                                            style="font-family:helvetica,arial,sans-serif;"
                                                                            role="presentation" cellpadding="0"
                                                                            cellspacing="0" width="100%" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td style="overflow-wrap:break-word;word-break:break-word;font-family:helvetica,arial,sans-serif;padding: 5px 5px 5px 5px;"
                                                                                        align="left">





                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if (!mso)&(!IE)]><!-->
                                                                    </div>
                                                                    <!--[if (!mso)&(!IE)]><!-->
                                                                </div>
                                                                <!--<![endif]-->
                                                            </div>
                                                        </div>
                                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                                        <!--[if (mso)|(IE)]><td align="center" width="412"  style="background-color: #ffffff;width: 412px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->

                                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                                    </div>
                                                </div>
                                            </div>
                                            <table style="font-family:helvetica,arial,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding: 10px 0;font-family:helvetica,arial,sans-serif;"
                                                            align="left">

                                                            <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                                            <div align="center">
                                                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://unlayer.com" style="height:42px; v-text-anchor:middle; width:216px;" arcsize="0%"  strokecolor="#000000" strokeweight="2px" fillcolor="#ffffff"><w:anchorlock/><center style="color:#000000;"><![endif]-->
                                                                <div
                                                                    style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #000000; background-color: #ffffff; border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px; width:38%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #000000; border-top-style: solid; border-top-width: 2px; border-left-color: #000000; border-left-style: solid; border-left-width: 2px; border-right-color: #000000; border-right-style: solid; border-right-width: 2px; border-bottom-color: #000000; border-bottom-style: solid; border-bottom-width: 2px;font-size: 18px;">
                                                                    <span
                                                                        style="display:block;padding:10px 20px;line-height:120%;"
                                                                        id="otp-content">${otp}</span>
                                                                </div>
                                                                <!--[if mso]></center></v:roundrect><![endif]-->
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>
                    <div style="padding: 0px;background-color: transparent">
                        <div
                            style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="187"  style="background-color: #ffffff;width: 187px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                                <div
                                    style="max-width: 320px;min-width: 187.98px;display: table-cell;vertical-align: top;">
                                    <div
                                        style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                                            <!--<![endif]-->


                                            <div
                                                style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:helvetica,arial,sans-serif;"
                                                    role="presentation" cellpadding="0" cellspacing="0" width="100%"
                                                    border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;font-family:helvetica,arial,sans-serif;padding: 10px 10px 10px 10px;"
                                                                align="left">





                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]><td align="center" width="412"  style="background-color: #ffffff;width: 412px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->

                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>


                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>`;
}
