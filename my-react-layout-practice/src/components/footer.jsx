import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <div class={styles.container}>
        <div class={styles.column}>
          <h2>Lady in White</h2>
          <img
            src="https://mail.google.com/mail/u/0?ui=2&ik=5609d7cc47&attid=0.1.1&permmsgid=msg-f:1776439847179808352&th=18a72ea108006e60&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_XVQ0BbLhvJITZcHVfB52KZTL9idznwunfO0NAjw9cNLP8XRZDAsHTzglxokBVHV1FZJOwQGhvUYh2ixqbtq8-7zTnK5pIgdCkSatYSe1xce3_DEWiSU81VFE&disp=emb"
            alt="Image Description"
          />
        </div>
        <div class={styles.column}>
          <h2>Colors</h2>
          <img
            src="https://mail.google.com/mail/u/0?ui=2&ik=&attid=0https://mail.google.com/mail/u/0?ui=2&ik=5609d7cc47&attid=0.1.1&permmsgid=msg-f:1776440293037471461&th=18a72f08d73076e5&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_7ufN6wZI9aZA6o8dKwxrMzt5nbqzjgvUy5G7Y1o5xriXoRYHSPX7xAoo55yP2UXJehGGyqfQ6EVa6Axc20UL4OLq-ZD79lpX5iysdB2c_wq6JCa96SKqWxOw&disp=emb.1.1&permmsgid=msg-f:1776440124768994000&th=18a72ee1a99b42d0&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_7RK48jgk5iz1oDTjCEsXf-b-zl4IcwBb24uB9tTq1lOFOKmbMVlyuPU43RpIoaztXj4W9sJZlocnFZIaIajcU2bxVPcZqQ5BCSmNL07xax9etSsD1IkNc2Zs&disp=emb"
            alt="Image Description"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
