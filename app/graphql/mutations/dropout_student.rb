module Mutations
  class DropoutStudent < GraphQL::Schema::Mutation
    argument :id, ID, required: true

    description "Mark student as exited"

    field :success, Boolean, null: false

    def resolve(params)
      mutator = DropoutStudentMutator.new(context, params)

      if mutator.valid?
        mutator.execute
        mutator.notify(:success, 'User updated successfully', 'Reloading users list')
        { success: true }
      else
        mutator.notify_errors
        { success: false }
      end
    end
  end
end
