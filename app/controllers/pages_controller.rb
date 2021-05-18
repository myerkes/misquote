class PagesController < ApplicationController
    def index
        @rand_quote = Quote.order(Arel.sql('RANDOM()')).first
    end
end
