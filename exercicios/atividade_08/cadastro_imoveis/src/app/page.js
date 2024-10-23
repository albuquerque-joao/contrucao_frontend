'use client'

import Pagina from '@/components/page'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { v4 as uuidv4 } from 'uuid'

// Validação Yup
const ImovelSchema = Yup.object().shape({
  // ... (mantém o mesmo esquema de validação)
});

export default function HomePage() {
  return (
    <Pagina titulo="Cadastro de Imoveis">
      <div className="form-container">
        <div className="form-card">
          <Formik
            initialValues={{
              id: uuidv4(),
              tipo: "",
              finalidade: "",
              valor: "",
              area: "",
              quartos: "",
              banheiros: "",
              descricao: "",
              foto: "",
              vagasGaragem: "",
              endereco: {
                cep: "",
                logradouro: "",
                numero: "",
                complemento: "",
                bairro: "",
                cidade: "",
                UF: "",
              },
              proprietario: {
                nome: "",
                CPF: "",
                telefone: "",
                email: "",
              },
            }}
            validationSchema={ImovelSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
              alert("Imóvel cadastrado com sucesso!");
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Dados do Imóvel</legend>
                  <div className="form-group">
                    <label>Tipo:</label>
                    <Field name="tipo" />
                    <ErrorMessage name="tipo" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Finalidade:</label>
                    <Field name="finalidade" />
                    <ErrorMessage name="finalidade" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Valor:</label>
                    <Field name="valor" type="number" />
                    <ErrorMessage name="valor" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Área (m²):</label>
                    <Field name="area" type="number" />
                    <ErrorMessage name="area" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Quartos:</label>
                    <Field name="quartos" type="number" />
                    <ErrorMessage name="quartos" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Banheiros:</label>
                    <Field name="banheiros" type="number" />
                    <ErrorMessage name="banheiros" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Descrição:</label>
                    <Field name="descricao" />
                    <ErrorMessage name="descricao" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Foto (URL):</label>
                    <Field name="foto" type="url" />
                    <ErrorMessage name="foto" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Vagas de Garagem:</label>
                    <Field name="vagasGaragem" type="number" />
                    <ErrorMessage name="vagasGaragem" component="div" style={{ color: 'red' }} />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Endereço</legend>
                  <div className="form-group">
                    <label>CEP:</label>
                    <Field name="endereco.cep">
                      {({ field }) => <InputMask {...field} mask="99999-999" />}
                    </Field>
                    <ErrorMessage name="endereco.cep" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Logradouro:</label>
                    <Field name="endereco.logradouro" />
                    <ErrorMessage name="endereco.logradouro" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Número:</label>
                    <Field name="endereco.numero" />
                    <ErrorMessage name="endereco.numero" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Complemento:</label>
                    <Field name="endereco.complemento" />
                    <ErrorMessage name="endereco.complemento" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Bairro:</label>
                    <Field name="endereco.bairro" />
                    <ErrorMessage name="endereco.bairro" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Cidade:</label>
                    <Field name="endereco.cidade" />
                    <ErrorMessage name="endereco.cidade" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>UF:</label>
                    <Field name="endereco.UF" />
                    <ErrorMessage name="endereco.UF" component="div" style={{ color: 'red' }} />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Dados do Proprietário</legend>
                  <div className="form-group">
                    <label>Nome do Proprietário:</label>
                    <Field name="proprietario.nome" />
                    <ErrorMessage name="proprietario.nome" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>CPF do Proprietário:</label>
                    <Field name="proprietario.CPF">
                      {({ field }) => <InputMask {...field} mask="999.999.999-99" />}
                    </Field>
                    <ErrorMessage name="proprietario.CPF" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Telefone do Proprietário:</label>
                    <Field name="proprietario.telefone">
                      {({ field }) => <InputMask {...field} mask="(99) 99999-9999" />}
                    </Field>
                    <ErrorMessage name="proprietario.telefone" component="div" style={{ color: 'red' }} />
                  </div>

                  <div className="form-group">
                    <label>Email do Proprietário:</label>
                    <Field name="proprietario.email" type="email" />
                    <ErrorMessage name="proprietario.email" component="div" style={{ color: 'red' }} />
                  </div>
                </fieldset>

                <Button type="submit" variant="primary">
                  Cadastrar Imóvel <FaCheck />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => resetForm()}
                >
                  Limpar
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Pagina>
  );
}