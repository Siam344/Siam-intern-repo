def calculate(value1, value2, multiplier):
    """
    Calculates a result based on input conditions.
    
    Parameters:
    - value1: int or float
    - value2: int or float
    - multiplier: int or float
    
    Returns:
    - The result of the calculation or an error message.
    """
    if value1 > 5:
        result = value1 + value2 * multiplier if value2 < 10 else value1 * value2 / multiplier
    elif multiplier > 0:
        result = value1 - value2 + multiplier
    else:
        return "Error"
    
    return result

print(calculate(6, 8, 2))
