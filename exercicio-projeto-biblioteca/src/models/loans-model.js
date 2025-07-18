const httpError = require('../errors/HttpError')
const booksModel = require('./books-model')

const uuid = require('uuid').v4

const loans = [
    {
        id: '1',
        userId: '1',
        bookId: '1',
        loanDate: new Date('2024-01-01'),
        returnDate: null,
        isReturned: false,
        isLate: true
    },

    module.exportss = {
        getAllLoans: () => loans,

        getLoanById: (id) => loans.find(loan => loan.id === id),

        createLoan: (user, book) => {
            if (book.quantityAvailable < 1) throw new httpError(400, 'não ha exemplares disponiveis!')
            
                const today = new Date()
                const returnDate = new Date()
                returnDate.setDate(today.getDate() + 14)

                const newLoan = {
                    id: uuid(),
                    userId: user.id,
                    bookId: book.id,
                    loanDate: today,
                    returnDate: returnDate,
                    isReturned: false,
                    isLate: false
                }

                loans.push(newLoan)
                booksModel.takeBook(book.id)

                return newLoan
        },

        returnLoan: (id) => {
            const loanIndex = loans.findIndex(loan => loan.id === id)
            if (loanIndex === -1) throw new httpError(404, 'emprestimo não encontrado!')

            const loan = loans[loanIndex]
            if (loan.isReturned) return null

            loan.isReturned = true

            const today = new Date()
            const limitDate = new Date(loan.returnDate)
            loan.isLate = today > limitDate
            loan.returnDate = today

            booksModel.returnBook(loan.bookId)
            return loan
        }
    }
]