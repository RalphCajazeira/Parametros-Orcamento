# Parâmetros de Orçamento

Este documento descreve cada um dos parâmetros presentes no módulo de orçamento, incluindo suas funcionalidades e como interagem com o sistema.

## 1. **Prazo de Entrega**
- **Campo:** `Prazo de entrega (dias)`
- **Função:** Define o prazo em dias para a entrega do pedido. Este valor será utilizado como padrão ao criar novos orçamentos, podendo ser alterado pelo usuário caso necessário.

## 2. **Tipo de Frete**
- **Campo:** `Tipo de frete`
- **Função:** Permite selecionar entre os tipos de frete disponíveis (por exemplo, FOB ou CIF). Esta informação será utilizada para calcular custos de frete e incluir no orçamento.

## 3. **Filial**
- **Campo:** `Filial`
- **Função:** Seleciona qual filial está associada ao orçamento. Este dado pode ser utilizado para fins de organização e relatórios de desempenho.

## 4. **Validade de Proposta**
- **Campo:** `Validade da proposta (dias)`
- **Função:** Define a validade da proposta comercial em dias. Esse valor é usado para informar o cliente até quando os valores e condições apresentados no orçamento são válidos.

## 5. **Lembrete**
- **Campos:**
  - `Dias`
  - `Opção de lembrete (após a criação ou antes da validade)`
- **Função:** Define um lembrete automático que pode ser:
  - Configurado para ser enviado `X` dias após a criação do orçamento.
  - Configurado para ser enviado `X` dias antes do vencimento da validade da proposta.

## 6. **Plano de Pagamento**
- **Campo:** `Plano de pagamento`
- **Função:** Define o plano de pagamento padrão para o orçamento (ex.: à vista, PIX, boleto). O usuário pode alterar o plano conforme necessidade.

## 7. **Despesas do Orçamento**
- **Campos:**
  - `Descrição da despesa`
  - `Tipo de cálculo (% ou R$)`
  - `Valor`
- **Função:** Permite adicionar despesas extras ao orçamento, como:
  - Impostos municipais (calculados em % do valor total).
  - Taxas fixas (especificadas em valores absolutos).
  
  As despesas adicionadas influenciam o total do orçamento automaticamente.

## 8. **Cálculo do Frete**
- **Campos:**
  - `Nome do tipo de frete` (dropdown com os tipos de frete cadastrados)
  - `Quantidade de km`
  - `Valor por km`
- **Função:** Permite calcular o custo do frete com base no tipo escolhido, na distância em quilômetros e no valor cobrado por quilômetro.

---

## Notas Adicionais
- Todos os parâmetros possuem valores padrões que podem ser configurados para serem aplicados automaticamente ao criar novos orçamentos.
- Os usuários podem modificar os valores durante a criação ou edição de um orçamento.
- Estes parâmetros garantem flexibilidade e controle no processo de criação de orçamentos, ajudando a otimizar a precisão e o tempo de execução.

