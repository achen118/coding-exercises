# Problem
# Given a string that starts with the token "breadandbutter", parse out a root command and command arguments that are included in the string.


# Part 1:
# Given the string
# input_string = "breadandbutter(command, arg1, arg2)"

# Parse the string for "command" and any number of arguments
# cmd = "command"
# args = ["arg1", "arg2"]

# The input string will always start with the tokens "breandbutter" and "(". Following these tokens will always appear a root command which is an alphanumeric string. Following this root command will appear 0 or more positional arguments, separated by ",". Arguments are alphanumeric string. The input string will end with ")".

def parse_input(input_string)
    cmd = ""
    args = []
    
    split_input = input_string.split(",")
    
    if split_input.length > 1
      cmd = split_input[0].slice(15, split_input[0].length - 1)
      i = 1;
      while i < split_input.length
        arg = ""
        input_chars = split_input[i].chars
        input_chars.each do |char|
          if char != " " && char != ")"
            arg += char
          end
        end
        args << arg
        i += 1
      end
    else
      cmd = split_input[0].slice(15, split_input[0].length - 2)
    end
    puts cmd
    puts args
end


# Part 2:
# Builds on part 1 with the addition of keyword arguments.
# Given the string
# input_string = "breadandbutter(command, arg1, arg2, kwarg1=val1, kwarg2 = val2)"

# Parse the string for "command", any number of arguments, and any number of keyward arguments. Arguments should be added to a list and keward arguments should be added to a dictionary with the keyward (before the "=") as keys and the values (after the "=") as values.
# cmd = "command"
# args = ["arg1", "arg2"]
# kwargs = {"kwarg1": "val1", "kwarg2": "val2"}

# The same restriction apply as in Part 1 wit the addition of keyword arguments. All keyword arguments (if any) will appear after positional arguments (if any). Keyword arguments and positional arguments will not be interspersed. Both keywords and values will be alphanumeric. Keywords and values will always be separated by a equals sign "=". There may be whitespace on either side of the equals sign.

def parse_input(input_string)
    cmd = ""
    args = []
    kwargs = {}
    
    split_input = input_string.split(",")
    
    if split_input.length > 1
      cmd = split_input[0].slice(15, split_input[0].length - 1)
      i = 1;
      while i < split_input.length
        arg = ""
        input_chars = split_input[i].chars
        input_chars.each do |char|
          if char != " " && char != ")"
            arg += char
          end
        end

        if arg.include?("=")
          equal_sign_idx = arg.index("=")
          key = arg.slice(0, equal_sign_idx)
          val = arg.slice(equal_sign_idx + 1, arg.length - 1)
          kwargs[key] = val
        else
          args << arg
        end
        i += 1
      end
    else
      cmd = split_input[0].slice(15, split_input[0].length - 2)
    end
    puts cmd
    puts args
    puts kwargs
end


# Part 3:
# Builds on part 2 with the addition of making punctuation optional.
# Given the string
# input_string = "breadandbutter command, arg1 arg2 kwarg1=val1, kwarg2 = val2)"

# Parse the string for the same values as in Part 2.
# cmd = "command"
# args = ["arg1", "arg2"]
# kwargs = {"kwarg1": "val1", "kwarg2": "val2"}

# Punctution (, ), , is now optional, as well as the amount of whitespace .
